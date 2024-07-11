import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import "../styles/pages_style/howItWorks_style.css"

function HowItWorks() {
  return (
    <div className="HowItWorks">
      <div className='content'>
     <Header/>
     <div className='content_pos'>
     <div className="content__nav">
        <Link className="content__nav_link" to="/">Главная </Link>
        <p>{'>'}</p>
        <p>Как это работает</p>
        </div>
     <div>
         <h2>У нашего сайта такие то идеи и такие то принципы работы</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident vel sit in est aspernatur quaerat beatae porro voluptatibus debitis, alias facere id, maxime culpa, perspiciatis placeat dolorem? Corrupti rem id iste incidunt deserunt delectus magnam quo atque molestiae. Sequi natus, tempore veritatis iure vero distinctio dicta ea repellendus necessitatibus molestiae illo ex accusantium quasi omnis dolore illum delectus aliquam adipisci dolorum hic? Deleniti dolor quasi voluptate est? Natus neque minus commodi illum vitae sunt veniam molestias, earum eius iusto animi quos velit quis quas saepe quo maxime aliquam? Doloremque voluptatum facere, eius deleniti, quo nulla, non quas expedita sapiente dolorem fugiat. Nisi eveniet maiores nesciunt ad. Voluptas assumenda molestiae et dolore, illum deserunt earum est officia accusamus modi commodi sint totam nesciunt rerum sunt amet animi quisquam consequuntur possimus dolorem expedita obcaecati. Reiciendis, praesentium quibusdam architecto vitae aliquid iure ut nihil, rem similique, facilis enim? Cum veritatis ipsum unde tempora accusamus excepturi similique dolores, facere eveniet id iure in neque harum repudiandae expedita nemo perferendis assumenda eaque illo! Laborum et amet vel similique optio quo ab quae at voluptas explicabo quaerat quisquam laboriosam ratione dolorem, magni harum nesciunt sed asperiores excepturi illo ad sint mollitia a corrupti. Perferendis, temporibus.</p>
         </div>
    </div>
    </div>
    <Footer/>
    </div>
    
    
  );
}

export default HowItWorks;