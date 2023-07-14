export type Api_Response = {
  flags: { svg: string },
  name: { common: string },
  capital: string[]
}[]

export interface Country {
  flag: string,
  name: string,
  capital: string
}

export enum QuestionEnum {
  FLAG_QUESTION = 1,
  CAPITAL_QUESTION = 2
}

export enum ResultEnum {
  LOW = 1,
  AVERAGE = 2,
  PERFECT = 3,
}