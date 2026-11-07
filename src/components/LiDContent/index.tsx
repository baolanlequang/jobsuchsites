import { QuestionCategoryDTO } from './models/QuestionCategoryDTO';
import { QuestionCategory } from './models/QuestionCategory';
import { QuestionViewModel } from './models/QuestionViewModel';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import PageHero from '@site/src/components/PageHero';
import QuestionView from './QuestionView';
import styles from './styles.module.css';

const PAGE_SIZE = 20

/** Page numbers to show, with null for a gap: 1 … 4 5 [6] 7 8 … 15 */
function pageItems(current: number, total: number): (number | null)[] {
  const pages = new Set([1, total, current - 1, current, current + 1])
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)
  const items: (number | null)[] = []
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] === 2) items.push(p - 1)
    else if (i > 0 && p - sorted[i - 1] > 2) items.push(null)
    items.push(p)
  })
  return items
}

function Pagination({page, totalPages, onChange}) {
  if (totalPages <= 1) return null
  return (
    <nav className={styles.pagination} aria-label="Phân trang">
      <button
        type="button"
        className={styles.pageButton}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label="Trang trước">
        ←
      </button>
      {
        pageItems(page, totalPages).map((item, i) => item === null ? (
          <span key={`gap-${i}`} className={styles.pageGap}>…</span>
        ) : (
          <button
            key={item}
            type="button"
            className={clsx(styles.pageButton, item === page && styles.pageButtonActive)}
            aria-current={item === page ? 'page' : undefined}
            onClick={() => onChange(item)}>
            {item}
          </button>
        ))
      }
      <button
        type="button"
        className={styles.pageButton}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Trang sau">
        →
      </button>
    </nav>
  )
}

function QuestionAndAnswerView({categoryDTO}) {
  const [listQuestions, setListQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const listTopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLoading(true)
    setPage(1)
    new QuestionViewModel().loadQuestion(categoryDTO.category).then((questions) => {
      setListQuestions(questions ?? [])
      setLoading(false)
    })
  }, [categoryDTO])

  if (loading) {
    return <p className={styles.status}>Đang tải câu hỏi…</p>
  }

  const totalPages = Math.max(1, Math.ceil(listQuestions.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const pageQuestions = listQuestions.slice(start, start + PAGE_SIZE)

  const goToPage = (next: number) => {
    setPage(next)
    listTopRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div ref={listTopRef} className={styles.questionList}>
      <div className={styles.listHeader}>
        <span className={styles.status}>
          {`Câu ${start + 1}–${start + pageQuestions.length} / ${listQuestions.length}`}
        </span>
        <Pagination page={page} totalPages={totalPages} onChange={goToPage} />
      </div>
      <div className={styles.questionGrid}>
        {
          pageQuestions.map((questionDTO, i) => (
            <QuestionView
              key={questionDTO.id}
              questionDTO={questionDTO}
              index={start + i + 1}
              totalQuestions={listQuestions.length} />
          ))
        }
      </div>
      <div className={styles.listFooter}>
        <Pagination page={page} totalPages={totalPages} onChange={goToPage} />
      </div>
    </div>
  )
}

function shortLabel(category: QuestionCategoryDTO): string {
  return category.de().replace(/^Bundesland /, '')
}

export default function LiDContent() {
  const [listCategories, setListCategories] = useState<QuestionCategoryDTO[]>([])
  const [selectedCategory, setSelectedCategory] = useState(new QuestionCategoryDTO(QuestionCategory.general))

  useEffect(() => {
    setListCategories(new QuestionViewModel().listQuestionCategories())
  }, [])

  return (
    <Layout
      title="Ôn thi Leben in Deutschland song ngữ Đức - Việt"
      description="Bộ câu hỏi Leben in Deutschland (thi quốc tịch Đức) song ngữ Đức - Việt, kèm đáp án.">
      <Head>
        {/* Opt out of AI training / dataset scraping (honoured by compliant bots only). */}
        <meta name="robots" content="noai, noimageai" />
      </Head>
      <PageHero
        eyebrow="Leben in Deutschland · Einbürgerungstest"
        title="Ôn thi Leben in Deutschland"
        highlight="song ngữ Đức - Việt"
        lede="Toàn bộ câu hỏi chung về nước Đức và câu hỏi riêng của từng bang, kèm bản dịch tiếng Việt và đáp án đúng." />
      <main className={styles.page}>
        <div className="container">
          <div className={styles.toolbar}>
            <span className={styles.toolbarLabel}>Chọn bộ câu hỏi</span>
            <div className={styles.chips}>
              {
                listCategories.map((category) => (
                  <button
                    key={category.category}
                    type="button"
                    className={clsx(styles.chip, category.category === selectedCategory.category && styles.chipActive)}
                    onClick={() => setSelectedCategory(category)}>
                    {shortLabel(category)}
                  </button>
                ))
              }
            </div>
          </div>
          <div className={styles.categoryHeading}>
            <h2>{selectedCategory.de()}</h2>
            <p>{selectedCategory.vi()}</p>
          </div>
          <QuestionAndAnswerView categoryDTO={selectedCategory} />
        </div>
      </main>
    </Layout>
  )
};
