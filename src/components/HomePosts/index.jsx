import { useEffect, useState } from 'react';
import './styles.css';

function HomePosts() {
    const [posts, setPots] = useState([]); // Estado

    // Efeito
    useEffect(() => {
        fetch('https://spaceflightnewsapi.net/api/v2/articles')
        .then(response => {
            response.json()
            .then(data => {
                console.log(data);
                setPots(data);
            });
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section id='home-posts'>
            <h1>Space Flight News</h1>

            {posts.map(post => (
                <article className='home-post'>
                    <img src={post.imageUrl} alt="" />
                    <div className='post-infos'>
                        <h2>{post.title}</h2>
                        <span>{post.newsSite}</span>
                        <p>{post.summary}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default HomePosts;