import { QuestionCategoryDTO } from './models/QuestionCategoryDTO';
import { QuestionCategory } from './models/QuestionCategory';
import { QuestionViewModel } from './models/QuestionViewModel';
import { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import QuestionView from './QuestionView';

function QuestionAndAnswerView({categoryDTO}) {
  const [listQuestions, setListQuestions] = useState([])
  const viewModel = new QuestionViewModel()
  useEffect(() => {
    viewModel.loadQuestion(categoryDTO.category).then((questions) => {
      setListQuestions(questions)
    })
  }, [categoryDTO])

  return (
    <div className="container">
      <div className="row">
      {
        listQuestions.map((questionDTO) => (
          <div className='col col--6 padding-horiz--md padding-vert--md'>
            <QuestionView questionDTO={questionDTO} totalQuestions={listQuestions.length} />
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default function LiDContent() {
  const [listCategories, setListCategories] = useState([])
  const viewModel = new QuestionViewModel()
  
  useEffect(() => {
    const categories = viewModel.listQuestionCategories()
    setListCategories(categories)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState(new QuestionCategoryDTO(QuestionCategory.general))
  
  return (
    <Layout>
      <div className="dropdown dropdown--hoverable">
        <button className="button button--primary">{ `${selectedCategory.de()} (${selectedCategory.vi()})`}</button>
        <ul className="dropdown__menu">
          {
            listCategories.map((category) => (
              <li>
                <span className="dropdown__link" onClick={() => setSelectedCategory(category)}>
                  {
                    `${category.de()} (${category.vi()})`
                  }
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      <QuestionAndAnswerView categoryDTO={selectedCategory} />
    </Layout>
  )
};