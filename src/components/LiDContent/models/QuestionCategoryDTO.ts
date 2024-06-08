import { QuestionCategory } from "./QuestionCategory";

export class QuestionCategoryDTO {
  category: QuestionCategory = QuestionCategory.general

  constructor(category: QuestionCategory) {
    this.category = category;
  }

  de(): string {
    switch (this.category) {
      case QuestionCategory.badenwuettemberg:
      case QuestionCategory.mixed_badenwuettemberg:
          return "Bundesland Baden-Württemberg"
      case QuestionCategory.bayern:
      case QuestionCategory.mixed_bayern:
          return "Bundesland Bayern"
      case QuestionCategory.berlin: 
      case QuestionCategory.mixed_berlin:
          return "Bundesland Berlin"
      case QuestionCategory.brandenburg:
      case QuestionCategory.mixed_brandenburg:
          return "Bundesland Brandenburg"
      case QuestionCategory.bremen:
      case QuestionCategory.mixed_bremen:
          return "Bundesland Bremen"
      case QuestionCategory.hamburg:
      case QuestionCategory.mixed_hamburg:
          return "Bundesland Hamburg"
      case QuestionCategory.hessen:
      case QuestionCategory.mixed_hessen:
          return "Bundesland Hessen"
      case QuestionCategory.mecklenburgvorpommern:
      case QuestionCategory.mixed_mecklenburgvorpommern:
          return "Bundesland Mecklenburg-Vorpommern"
      case QuestionCategory.niedersachsen:
      case QuestionCategory.mixed_niedersachsen:
          return "Bundesland Niedersachsen"
      case QuestionCategory.nordrheinwestfalen:
      case QuestionCategory.mixed_nordrheinwestfalen:
          return "Bundesland Nordrhein-Westfalen"
      case QuestionCategory.rheinlandpfalz:
      case QuestionCategory.mixed_rheinlandpfalz:
          return "Bundesland Rheinland-Pfalz"
      case QuestionCategory.saarland:
      case QuestionCategory.mixed_saarland:
          return "Bundesland Saarland"
      case QuestionCategory.sachsen:
      case QuestionCategory.mixed_sachsen:
          return "Bundesland Sachsen"
      case QuestionCategory.sachsenanhalt:
      case QuestionCategory.mixed_sachsenanhalt:
          return "Bundesland Sachsen-Anhalt"
      case QuestionCategory.schleswigholstein:
      case QuestionCategory.mixed_schleswigholstein:
          return "Bundesland Schleswig-Holstein"
      case QuestionCategory.thueringen
      :case QuestionCategory.mixed_thueringen:
          return "Bundesland Thüringen"
      case QuestionCategory.general:
          return "Deutschland allgemein"
      }
  }

  vi(): string {
    switch (this.category) {
      case QuestionCategory.badenwuettemberg:
          return "Các câu hỏi về bang Baden-Württemberg"
      case QuestionCategory.bayern:
          return "Các câu hỏi về bang Bayern"
      case QuestionCategory.berlin:
          return "Các câu hỏi về bang Berlin"
      case QuestionCategory.brandenburg:
          return "Các câu hỏi về bang Brandenburg"
      case QuestionCategory.bremen:
          return "Các câu hỏi về bang Bremen"
      case QuestionCategory.hamburg:
          return "Các câu hỏi về bang Hamburg"
      case QuestionCategory.hessen:
          return "Các câu hỏi về bang Hessen"
      case QuestionCategory.mecklenburgvorpommern:
          return "Các câu hỏi về bang Mecklenburg-Vorpommern"
      case QuestionCategory.niedersachsen:
          return "Các câu hỏi về bang Niedersachsen"
      case QuestionCategory.nordrheinwestfalen:
          return "Các câu hỏi về bang Nordrhein-Westfalen"
      case QuestionCategory.rheinlandpfalz:
          return "Các câu hỏi về bang Rheinland-Pfalz"
      case QuestionCategory.saarland:
          return "Các câu hỏi về bang Saarland"
      case QuestionCategory.sachsen:
          return "Các câu hỏi về bang Sachsen"
      case QuestionCategory.sachsenanhalt:
          return "Các câu hỏi về bang Sachsen-Anhalt"
      case QuestionCategory.schleswigholstein:
          return "Các câu hỏi về bang Schleswig-Holstein"
      case QuestionCategory.thueringen:
          return "Các câu hỏi về bang Thüringen"
      case QuestionCategory.general:
          return "Các câu hỏi chung về nước Đức"
      case QuestionCategory.mixed_badenwuettemberg:
          return "Bang Baden-Württemberg"
      case QuestionCategory.mixed_bayern:
          return "Bang Bayern"
      case QuestionCategory.mixed_berlin:
          return "Bang Berlin"
      case QuestionCategory.mixed_brandenburg:
          return "Bang Brandenburg"
      case QuestionCategory.mixed_bremen:
          return "Bang Bremen"
      case QuestionCategory.mixed_hamburg:
          return "Bang Hamburg"
      case QuestionCategory.mixed_hessen:
          return "Bang Hessen"
      case QuestionCategory.mixed_mecklenburgvorpommern:
          return "Bang Mecklenburg-Vorpommern"
      case QuestionCategory.mixed_niedersachsen:
          return "Bang Niedersachsen"
      case QuestionCategory.mixed_nordrheinwestfalen:
          return "Bang Nordrhein-Westfalen"
      case QuestionCategory.mixed_rheinlandpfalz:
          return "Bang Rheinland-Pfalz"
      case QuestionCategory.mixed_saarland:
          return "Bang Saarland"
      case QuestionCategory.mixed_sachsen:
          return "Bang Sachsen"
      case QuestionCategory.mixed_sachsenanhalt:
          return "Bang Sachsen-Anhalt"
      case QuestionCategory.mixed_schleswigholstein:
          return "Bang Schleswig-Holstein"
      case QuestionCategory.mixed_thueringen:
          return "Bang Thüringen"
      }
  }

  logo(): string {
    switch (this.category) {
      case QuestionCategory.badenwuettemberg:
      case QuestionCategory.mixed_badenwuettemberg:
          return "logo_bw"
      case QuestionCategory.bayern:
      case QuestionCategory.mixed_bayern:
          return "logo_by"
      case QuestionCategory.berlin:
      case QuestionCategory.mixed_berlin:
          return "logo_be"
      case QuestionCategory.brandenburg:
      case QuestionCategory.mixed_brandenburg:
          return "logo_bra"
      case QuestionCategory.bremen:
      case QuestionCategory.mixed_bremen:
          return "logo_bre"
      case QuestionCategory.hamburg:
      case QuestionCategory.mixed_hamburg:
          return "logo_ham"
      case QuestionCategory.hessen:
      case QuestionCategory.mixed_hessen:
          return "logo_he"
      case QuestionCategory.mecklenburgvorpommern:
      case QuestionCategory.mixed_mecklenburgvorpommern:
          return "logo_mec"
      case QuestionCategory.niedersachsen:
      case QuestionCategory.mixed_niedersachsen:
          return "logo_nie"
      case QuestionCategory.nordrheinwestfalen:
      case QuestionCategory.mixed_nordrheinwestfalen:
          return "logo_nw"
      case QuestionCategory.rheinlandpfalz:
      case QuestionCategory.mixed_rheinlandpfalz:
          return "logo_rlp"
      case QuestionCategory.saarland:
      case QuestionCategory.mixed_saarland:
          return "logo_saa"
      case QuestionCategory.sachsen:
      case QuestionCategory.mixed_sachsen:
          return "logo_sach"
      case QuestionCategory.sachsenanhalt:
      case QuestionCategory.mixed_sachsenanhalt:
          return "logo_sah"
      case QuestionCategory.schleswigholstein:
      case QuestionCategory.mixed_schleswigholstein:
          return "logo_sho"
      case QuestionCategory.thueringen:
      case QuestionCategory.mixed_thueringen:
          return "logo_thu"
      case QuestionCategory.general:
          return "logo_general"
      }
  }
}