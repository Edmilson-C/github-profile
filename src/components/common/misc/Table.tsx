/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'

import LinesLoader from './LinesLoader'
import AnimationPlayer from './AnimationPlayer'

interface TableProps {
  headers: TableHeader[]
  items?: object[]
  value?: object
  loading?: boolean
  counter?: boolean
  actions?: boolean
  keyBy?: string
  className?: string
  emptyTitle?: string
  emptyDescription?: string
  handleClick?: (e: React.MouseEvent, item: object) => void
  handleRightClick?: (e: React.MouseEvent, item: object) => void
}

interface TableHeader {
  key: string
  title: string
  class?: string
}

const Table = ({
  headers,
  items = [],
  value = {},
  loading = false,
  counter = false,
  actions = false,
  keyBy = 'id',
  className = '',
  emptyTitle = 'Oops!',
  emptyDescription = 'Nenhum resultado encontrado!',
  handleClick = () => {},
  handleRightClick = () => {}
}: TableProps) => {
  // @ts-ignore
  const [activeIndex, setActiveIndex] = useState<string | number>(value[keyBy])

  const tableHeaders = [...headers]

  const getHeaderKey = (column: any) => (typeof column === 'object' ? column.key : column)

  const rowClasses = (item: object) => {
    let classes = ''

    if (actions) {
      classes += 'cursor-pointer '
    }

    // @ts-ignore
    if (item[keyBy] === activeIndex) {
      classes += 'bg-cyan-400 hover:bg-cyan-200 text-white'
    } else {
      classes += 'hover:bg-gray-100'
    }

    return classes
  }

  return (
    <div className={`${className} flex rounded-xl`}>
      <div className="overflow-hidden border-x border-b border-gray-100 shadow-sm rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {counter && <th className="w-10">#</th>}
              {tableHeaders.map((header, index) => (
                <th
                  key={index * Math.random()}
                  className={`${
                    header.class ? header.class : ''
                  } p-3 text-sm font-medium tracking-wider text-left text-black capitalize`}
                >
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          {loading ? (
            <tbody className="w-full">
              <tr>
                <td colSpan={tableHeaders.length + 1}>
                  <div className="flex flex-row flex-wrap">
                    <LinesLoader />
                    <LinesLoader />
                    <LinesLoader />
                    <LinesLoader />
                    <LinesLoader />
                    <LinesLoader />
                    <LinesLoader />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : items.length > 0 ? (
            <tbody className="bg-white divide-y divide-gray-100 text-base">
              {items.map((item, index) => (
                <tr
                  key={index * Math.random()}
                  className={`${rowClasses(item)} justify-center`}
                  onClick={(e) => {
                    if (actions) {
                      // @ts-ignore
                      setActiveIndex(item[keyBy])
                      handleClick(e, item)
                    }
                  }}
                  onContextMenu={(e) => {
                    if (actions) {
                      e.preventDefault()
                      handleRightClick(e, item)
                    }
                  }}
                >
                  {counter && <td className="w-10 pl-3">{Number(index) + 1}</td>}
                  {tableHeaders.map(
                    (header) => getHeaderKey(header) !== 'id' && (
                      <td key={getHeaderKey(header)} className="p-3">
                        {
                          // @ts-ignore
                          item[getHeaderKey(header)]
                        }
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="w-full">
              <tr>
                <td colSpan={tableHeaders.length + 1}>
                  <div className="flex flex-row justify-center items-center flex-wrap w-full py-6">
                    <AnimationPlayer src="empty" />
                    <h4 className="w-full text-center text-dark">{emptyTitle}</h4>
                    <p className="w-full text-center text-xs">{emptyDescription}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default Table
