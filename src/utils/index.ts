/* eslint-disable no-bitwise */
import { ReactNode } from 'react'
import { utils, writeFile } from 'xlsx'
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
import * as html2pdf from 'html2pdf.js'
import _ from 'lodash'

import { HOLIDAYS } from '../data/constants'

export const generateUUID = () => {
  let dt = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

export const formatDate = (
  date: string | Date = new Date(),
  param: string = 'date',
  separator: string = '/',
  lang = 'pt'
) => {
  dayjs.extend(localizedFormat)
  dayjs.locale(lang)
  const d = dayjs(date)

  const dateObject: any = {
    displayDate: d.format('LLLL').substring(0, d.format('LLLL').length - 9),
    date: `${d.format(`DD${separator}MM${separator}YYYY`)}`,
    dateReverse: `${d.format(`YYYY${separator}MM${separator}DD`)}`,
    dateMonth: `${d.format(`DD${separator}MMM${separator}YYYY`)}`,
    dateMonthReverse: `${d.format(`YYYY${separator}MMM${separator}DD`)}`,
    time: `${d.format('HH:mm')}`,
    timeSeconds: `${d.format('HH:mm:ss')}`,
    hoursTimezone: d.format('HH:mm:ssZ'),
    dateTime: `${d.format(`DD${separator}MM${separator}YYYY`)} ${d.format('HH:mm')}`,
    fullDateTime: d.format()
  }

  return dateObject[param]
}

export const addDate = (
  quantity: number,
  type = 'day',
  date: string | Date = new Date(),
  param: string = 'date',
  separator: string = '/',
  lang = 'pt'
) => {
  dayjs.extend(localizedFormat)
  dayjs.locale(lang)

  // @ts-ignore
  const d = dayjs(date).add(quantity, type)

  // @ts-ignore
  return formatDate(d, param, separator, lang)
}

export const subtractDate = (
  quantity: number,
  type = 'day',
  date: string | Date = new Date(),
  param: string = 'date',
  separator: string = '/',
  lang = 'pt'
) => {
  dayjs.extend(localizedFormat)
  dayjs.locale(lang)

  // @ts-ignore
  const d = dayjs(date).subtract(quantity, type)

  // @ts-ignore
  return formatDate(d, param, separator, lang)
}

// eslint-disable-next-line no-confusing-arrow
export const formatMoney = (
  number: number,
  currency: boolean = false,
  maximumFractionDigits: number = 2
) => currency
  ? `${Number.parseFloat(`${number}`).toLocaleString('pt', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits
  })} MZN`
  : Number.parseFloat(`${number}`).toLocaleString('pt', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits
  })

export const generateWorksheet = (data: Object[], name: string) => {
  const wb = utils.book_new()
  const ws = utils.json_to_sheet(data)

  const date = formatDate(new Date(), 'date', '-')

  utils.book_append_sheet(wb, ws)
  writeFile(wb, `relatorio_${name}_${date}.xlsx`)
}

export const chunk = (value: any[], size: number) => _.chunk(value, size)

export const clone = (value: any) => _.clone(value)

export const cloneDeep = (value: any) => _.cloneDeep(value)

// Print a PDF from a BLOB file
export const printPDF = (file: File): Promise<void> => (
  new Promise((resolve) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    const url = URL.createObjectURL(file)
    reader.onload = () => {
      const embed = document.createElement('iframe') as HTMLIFrameElement
      embed.id = `embed-printing-element-${Math.random()}`
      // @ts-ignore
      embed.type = 'application/pdf'
      embed.src = url
      embed.style.height = '0'
      const body = document.getElementsByTagName('body')[0]
      body.appendChild(embed)
      embed.addEventListener('load', () => {
        embed.contentWindow?.focus()
        embed.contentWindow?.print()
        resolve()
      })
    }
  })
)

// Generate PDF from a Element or Component
export const generatePDF = (element: HTMLElement | ReactNode, options: Object) => {
  html2pdf()
    .from(element)
    .set(options)
    .save()
}

export function isHoliday(date: Date = new Date()) {
  const day = date.getDate()
  const month = date.getMonth()

  if (HOLIDAYS[month].length < 0) {
    return false
  }

  for (let j = 0; j < HOLIDAYS[month].length; j++) {
    if (day === HOLIDAYS[month][j]) {
      return true
    }
  }

  return false
}
