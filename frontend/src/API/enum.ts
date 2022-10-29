export enum PostCategories {
  news = 1,
  seminar = 2,
  speech = 3,
}

export const PostCategoryName: {
  [key in keyof typeof PostCategories]: string;
} = {
  news: "Новости",
  seminar: "Семинары",
  speech: "Выступления",
};

export enum DocumentCategories {
  state_reports = 1,
  work_plan = 2,
  civil_service = 3,
  public_procurement = 4,
  relationship_information = 5,
  control_measures = 6,
  appeal_procedure = 7,
  information_about_accepted = 8,
  information_about_contributions = 9,
  execution_reports = 10,
  methodological_support = 11,
  regulations = 12,
  normative_acts = 13,
  corruption = 14,
  commission = 15,
  anti_corruption_expertise = 16,
  income_information = 17,
  annual_reports = 18,
  agreements = 19
}

export const DocCategoryName: {
  [key in keyof typeof DocumentCategories]: string;
} = {
  state_reports: "Гос отчеты",
  work_plan: "План работ",
  civil_service: "Госслужба",
  public_procurement: "Госзакупки",
  relationship_information: "Информация о взаимоотношениях",
  control_measures: "Контрольные и экспертно-аналитические мероприятия",
  appeal_procedure: "Порядок обжалования КСО",
  information_about_accepted:
    "Информация о принятых по внесённым представлениям и предписаниям решениях и мерах",
  information_about_contributions:
    "Информация о внесённых по итогам проведения контрольных и экспертно-аналитических мероприятий представлениях и предписаниях",
  execution_reports: "Отчеты о исполнений бюджета",
  methodological_support: "Документы по методологическому обеспечению",
  regulations: "Нормативные документы",
  normative_acts: "Нормативные акты",
  corruption: "Коррупция",
  commission: "Комиссия (коррупций)",
  anti_corruption_expertise: "Антикоррупционная экспертиза",
  income_information: "Сведения о доходах",
  annual_reports: "Годовые отчеты",
  agreements: "Соглашения"
};

export enum FileType {
  PDF = 1,
  excel = 2,
  word = 3,
  other = 4,
}
