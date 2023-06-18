/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react'

import DoubleArrowLeft from '../../../assets/icons/DoubleArrowLeft'
import DoubleArrowRight from '../../../assets/icons/DoubleArrowRight'
import ArrowLeft from '../../../assets/icons/ArrowLeft'
import ArrowRight from '../../../assets/icons/ArrowRight'

interface PaginationProps {
  start?: number
  end?: number
  currentPage?: number
  totalDocs?: number
  totalPages?: number
  className?: string
  handlePageChange?: (page: number) => void
}

const Pagination = ({
  start = 1,
  end = 1,
  currentPage = 1,
  totalDocs = 1,
  totalPages = 1,
  className = '',
  handlePageChange = () => {}
}: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([])

  useEffect(() => {
    const p = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        p.push(i)
      }
    } else if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        p.push(i)
      }
    } else if (totalPages - currentPage <= 2) {
      for (let i = totalPages; i > totalPages - 5; i--) {
        p.push(i)
      }
      p.reverse()
    } else {
      p.push(currentPage - 2)
      p.push(currentPage - 1)
      p.push(currentPage)
      p.push(currentPage + 1)
      p.push(currentPage + 2)
    }

    setPages([...p])
  }, [])

  const changePage = (page: number) => {
    if (currentPage !== page) {
      handlePageChange(page)
    }
  }

  return (
    <div className={`${className} w-full mt-10 flex justify-between items-center text-black`}>
      <p className="text-sm inline">
        <span className="hidden lg:inline mr-1">Mostrando</span>
        <span className="text-primary-default mr-1">
          {start}-{end}
        </span>
        de
        <span className="text-primary-default"> {totalDocs} </span>
        <span className="hidden lg:inline">Resultados</span>
      </p>

      <div className="flex items-center">
        {totalPages > 5 && (
          <>
            <span
              className="hover:text-primary-default cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => {
                changePage(1)
              }}
            >
              <DoubleArrowLeft width="24" height="24" />
            </span>
            <span
              className="hover:text-primary-default cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => {
                if (currentPage > 1) {
                  changePage(currentPage - 1)
                }
              }}
            >
              <ArrowLeft width="24" height="24" />
            </span>
          </>
        )}
        {pages.map((page, index) => (
          <p
            key={page}
            className={`${currentPage === page ? 'text-primary-default font-bold' : ''} ${
              index > 0 ? 'ml-1' : ''
            } text-lg hover:text-primary-default cursor-pointer`}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (currentPage !== page) {
                changePage(page)
              }
            }}
          >
            {page}
          </p>
        ))}
        {totalPages > 5 && (
          <>
            <span
              className="hover:text-primary-default cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => {
                changePage(totalPages)
              }}
            >
              <ArrowRight width="24" height="24" />
            </span>
            <span
              className="hover:text-primary-default cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => {
                if (currentPage < totalPages) {
                  changePage(currentPage + 1)
                }
              }}
            >
              <DoubleArrowRight width="24" height="24" />
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default Pagination
