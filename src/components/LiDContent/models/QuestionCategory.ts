export enum QuestionCategory {
  badenwuettemberg, bayern, berlin,
  brandenburg, bremen, hamburg, hessen, mecklenburgvorpommern,
  niedersachsen, nordrheinwestfalen, rheinlandpfalz, saarland,
  sachsen, sachsenanhalt, schleswigholstein, thueringen,
  general,
  mixed_badenwuettemberg, mixed_bayern, mixed_berlin,
  mixed_brandenburg, mixed_bremen, mixed_hamburg, mixed_hessen, mixed_mecklenburgvorpommern,
  mixed_niedersachsen, mixed_nordrheinwestfalen, mixed_rheinlandpfalz, mixed_saarland,
  mixed_sachsen, mixed_sachsenanhalt, mixed_schleswigholstein, mixed_thueringen
}

export namespace QuestionCategory {
  export function allValues() {
    return [
      QuestionCategory.general, QuestionCategory.badenwuettemberg, QuestionCategory.bayern, QuestionCategory.berlin,
      QuestionCategory.brandenburg, QuestionCategory.bremen, QuestionCategory.hamburg, QuestionCategory.hessen,
      QuestionCategory.mecklenburgvorpommern, QuestionCategory.niedersachsen, QuestionCategory.nordrheinwestfalen,
      QuestionCategory.rheinlandpfalz, QuestionCategory.saarland, QuestionCategory.sachsen,
      QuestionCategory.sachsenanhalt, QuestionCategory.schleswigholstein, QuestionCategory.thueringen
    ]
  }

  export function allValuesMixed() {
    return [
      QuestionCategory.mixed_badenwuettemberg, QuestionCategory.mixed_bayern, QuestionCategory.mixed_berlin,
      QuestionCategory.mixed_brandenburg, QuestionCategory.mixed_bremen, QuestionCategory.mixed_hamburg,
      QuestionCategory.mixed_hessen, QuestionCategory.mixed_mecklenburgvorpommern,
      QuestionCategory.mixed_niedersachsen, QuestionCategory.mixed_nordrheinwestfalen, QuestionCategory.mixed_rheinlandpfalz,
      QuestionCategory.mixed_saarland, QuestionCategory.mixed_sachsen, QuestionCategory.mixed_sachsenanhalt,
      QuestionCategory.mixed_schleswigholstein, QuestionCategory.mixed_thueringen]
  }
}
