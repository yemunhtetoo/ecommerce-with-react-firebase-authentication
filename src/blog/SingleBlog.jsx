import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';
const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];
    
const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    // console.log(id)
    const result = blog.filter((b) => b.id === Number(id));
    // console.log(result)
    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    <div className='row row-cols-1 justify-content-center g-4'>
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className='post-inner'>
                                                    {
                                                        result.map((item)=> (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt='' />
                                                                </div>

                                                                <div className='post-content'>
                                                                    <h3>{item.title}</h3>
                                                                    <div className='meta-post'>
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val,i)=>(
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}></i>{" "}
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quos a quis beatae necessitatibus! Voluptatem quam at dolorem architecto obcaecati eius quo odit explicabo libero consequuntur dolore, voluptatum voluptates cum!</p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure a omnis qui aliquid vel, porro quibusdam, dolorum quod minus in veniam amet saepe earum fugiat provident est consectetur sit!</p>
                                                                        <cite>
                                                                            <a href='#'>...Melissa  Hunter</a>
                                                                        </cite>
                                                                    </blockquote>

                                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, iusto, deserunt ad rem voluptates possimus dolore molestias itaque aliquid pariatur eum! Numquam obcaecati voluptate, maiores nesciunt voluptatem consectetur accusantium debitis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita impedit consequuntur fugit eligendi temporibus alias? Officiis quia autem rem, non, dolor voluptatem expedita soluta error, sit doloribus natus ratione reprehenderit.</p>
                                                                    <img src='/src/assets/images/blog/single/01.jpg' alt='' />

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores illo provident maiores quis unde nesciunt aspernatur error animi minima? Vero minima pariatur eum id illum explicabo nulla, iure expedita! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ipsum, praesentium aspernatur ex esse atque aliquid sed impedit obcaecati magnam alias molestias, repellat excepturi pariatur placeat quod perspiciatis inventore repudiandae.</p>

                                                                    <div className='video-thumb'>
                                                                        <img src='/src/assets/images/blog/single/02.jpg' alt='' />
                                                                        <a href='#' className='video-button popup' target='_blank'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae minima, mollitia ut fuga iusto quis provident, nostrum distinctio sed totam enim alias aliquam recusandae rerum magni omnis tempore asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius amet, beatae necessitatibus ex, cupiditate obcaecati temporibus quas corporis laborum ut voluptates aliquid deserunt quia nihil! Incidunt explicabo accusantium temporibus ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, unde. Dolores impedit ut minima eius aliquam ex blanditiis sint natus ipsum dicta incidunt, quod adipisci minus numquam voluptatum placeat assumenda.
                                                                    </p>
                                                                    <div className='tags-section'>
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href='#'>Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href='#'>Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href='#'>Personal</a>
                                                                            </li>
                                                                        </ul>

                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val,i)=>(
                                                                                    <li key={i}>
                                                                                        <a href='#' className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>


                                        <div className='navigations-part'>
                                            <div className='left'>
                                                <a href='#' className='prev'>
                                                    <i className='icofont-double-left'></i> Previous Blog
                                                </a>
                                                <a href='#' className='title'>
                                                Easy Japanese Listening with YUYU NIHONGO - YUYUの日本語Podcast / Japanese podcast for beginners
                                                </a>
                                            </div>
                                            <div className='right'>
                                                <a href='#' className='prev'>
                                                    <i className='icofont-double-right'></i> Previous Blog
                                                </a>
                                                <a href='#' className='title'>
                                                Easy Japanese Listening with YUYU NIHONGO - YUYUの日本語Podcast / Japanese podcast for beginners
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog