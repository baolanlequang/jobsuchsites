import { QuestionDTO } from "./QuestionDTO"
import { QuestionCategory } from "./QuestionCategory"
import { ModelHelper } from "../utils/ModelHelper"
import { QuestionCategoryDTO } from "./QuestionCategoryDTO"

export class QuestionViewModel {
  listQuestions: QuestionDTO[] = []
  listUserAnswers: Map<string, number> = new Map()

  isPracticeMode(land: QuestionCategory): Boolean {
    return QuestionCategory.allValuesMixed().includes(land)
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  swapItems(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  async loadQuestion(land: QuestionCategory): Promise<QuestionDTO[] | null> {
    if (QuestionCategory.allValuesMixed().includes(land)) {
      return this.loadPracticeQuestion(land)
    }
    
    const helper = new ModelHelper()
    let fileName = "00_all"
    switch (land) {
      case QuestionCategory.badenwuettemberg:
        fileName = "01_bw"
        break
      case QuestionCategory.bayern:
        fileName = "02_by"
        break
      case QuestionCategory.berlin:
        fileName = "03_be"
        break
      case QuestionCategory.brandenburg:
        fileName = "04_bra"
        break
      case QuestionCategory.bremen:
        fileName = "05_bre"
        break
      case QuestionCategory.hamburg:
        fileName = "06_ham"
        break
      case QuestionCategory.hessen:
        fileName = "07_he"
        break
      case QuestionCategory.mecklenburgvorpommern:
        fileName = "08_mec"
        break
      case QuestionCategory.niedersachsen:
        fileName = "09_nie"
        break
      case QuestionCategory.nordrheinwestfalen:
        fileName = "10_nw"
        break
      case QuestionCategory.rheinlandpfalz:
        fileName = "11_rlp"
        break
      case QuestionCategory.saarland:
        fileName = "12_saa"
        break
      case QuestionCategory.sachsen:
        fileName = "13_sach"
        break
      case QuestionCategory.sachsenanhalt:
        fileName = "14_sah"
        break
      case QuestionCategory.schleswigholstein:
        fileName = "15_sho"
        break
      case QuestionCategory.thueringen:
        fileName = "16_thu"
        break
      default:
        break
      }

      return new Promise((resolve, reject) => {
        helper.decodeJsonFromFile(fileName, [QuestionDTO]).then((decodeData) => {
          if (Array.isArray(decodeData)) {
            resolve(decodeData)
          } else {
            reject('Cannot read data')
          }
        })
      })
  }


  async loadPracticeQuestion(land: QuestionCategory): Promise<QuestionDTO[] | null> {
    const listQuestions = []
    const listUserAnswers = new Map()
    
    const helper = new ModelHelper()
    let fileName = "00_all"
    
    const allQuestion = await helper.decodeJsonFromFile(fileName, [QuestionDTO])

    if (!allQuestion) return null;
    
    switch (land) {
      case QuestionCategory.mixed_badenwuettemberg:
        fileName = "01_bw"
        break
      case QuestionCategory.mixed_bayern:
        fileName = "02_by"
        break
      case QuestionCategory.mixed_berlin:
        fileName = "03_be"
        break
      case QuestionCategory.mixed_brandenburg:
        fileName = "04_bra"
        break
      case QuestionCategory.mixed_bremen:
        fileName = "05_bre"
        break
      case QuestionCategory.mixed_hamburg:
        fileName = "06_ham"
        break
      case QuestionCategory.mixed_hessen:
        fileName = "07_he"
        break
      case QuestionCategory.mixed_mecklenburgvorpommern:
        fileName = "08_mec"
        break
      case QuestionCategory.mixed_niedersachsen:
        fileName = "09_nie"
        break
      case QuestionCategory.mixed_nordrheinwestfalen:
        fileName = "10_nw"
        break
      case QuestionCategory.mixed_rheinlandpfalz:
        fileName = "11_rlp"
        break
      case QuestionCategory.mixed_saarland:
        fileName = "12_saa"
        break
      case QuestionCategory.mixed_sachsen:
        fileName = "13_sach"
        break
      case QuestionCategory.mixed_sachsenanhalt:
        fileName = "14_sah"
        break
      case QuestionCategory.mixed_schleswigholstein:
        fileName = "15_sho"
        break
      case QuestionCategory.mixed_thueringen:
        fileName = "16_thu"
        break
      default:
        break
    }
    
    const bundesLandQuestion = await helper.decodeJsonFromFile(fileName,[QuestionDTO])
    if (!bundesLandQuestion) return null;
    
    const generalSet = new Set<number>()

    while (generalSet.size < 30) {
      const randomValue = this.getRandomInt(300)
      generalSet.add(randomValue)
    }

    const bundesLandSet = new Set<number>()
    while (bundesLandSet.size < 3) {
        let randomValue = this.getRandomInt(10)
        bundesLandSet.add(randomValue)
    }

    generalSet.forEach((idx) => {
      const question = allQuestion[idx]
      listQuestions.push(question)
    })

    bundesLandSet.forEach((idx) => {
      const question = bundesLandQuestion[idx]
      listQuestions.push(question)
    })
    
    return new Promise((resolve, reject) => {
      this.shuffleQuestion(listQuestions).then((questions) => {
        resolve(questions)
      }).catch((error) => {
        reject(error)
      })
      helper.decodeJsonFromFile(fileName, [QuestionDTO]).then((decodeData) => {
        if (Array.isArray(decodeData)) {
          resolve(decodeData)
        } else {
          reject('Cannot read data')
        }
      })
    })
  }

  async shuffleQuestion(listQuestions: QuestionDTO[]): Promise<QuestionDTO[]> {
    this.listUserAnswers = new Map()
    for (let index = 0; index < 10; index++) {
      const idxGeneral = this.getRandomInt(33)
      const idxBundesLand = this.getRandomInt(33)
      this.swapItems(listQuestions, idxGeneral, idxBundesLand)
    }

    listQuestions.forEach((question) => {
      this.listUserAnswers[question.id] = -1
    })
    return listQuestions
  }

  listQuestionCategories(): QuestionCategoryDTO[] {
    const categories: QuestionCategoryDTO[] = []
    QuestionCategory.allValues().forEach((category) => {
      const categoryDTO = new QuestionCategoryDTO(category)
      categories.push(categoryDTO)
    })
    return categories
}
}