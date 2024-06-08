import { AnswerDTO } from "./AnswerDTO";

export class QuestionContent {
  de: string
  vi: string
  
  constructor(de: string = "", vi: string = "") {
    this.de = de;
    this.vi = vi;
  }
}

export class QuestionDTO {
  id: string;
  question: QuestionContent;
  is_image: boolean
  image_name: string
  answer: number
  options: AnswerDTO[]

  constructor(
    id: string = "",
    question: QuestionContent = new QuestionContent(), 
    is_image: boolean = false,
    image_name: string = "",
    answer: number = -1,
    options: AnswerDTO[] = []) {
      this.id = id;
      this.question = question;
      this.is_image = is_image;
      this.image_name = image_name;
      this.answer = answer;
      this.options = options;
  }

  getCorrectAnswer(): AnswerDTO {
    const filtered = this.options.filter((answerDTO) => {
      return answerDTO.no === this.answer;
    })
    return filtered[0];
  }

  getAnswer(answerID: number): AnswerDTO {
    const filtered = this.options.filter((answerDTO) => {
      answerDTO.no === answerID;
    })
    return filtered[0];
  }

  // getImageDrawableID(context: Context): Int {
  //   if (!this.image_name ) return 0
  //   val newImageName = image_name.subSequence(startIndex = 3, image_name.length).toString()
  //   return context.resources.getIdentifier(newImageName, "drawable", context.packageName)
  // }
}