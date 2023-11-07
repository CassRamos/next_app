import Image from 'next/image';
import React from 'react'
import styles from "./page.module.css"
import { notFound } from 'next/navigation';

async function getData({ id }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" })

    if (!res.ok) {
        return notFound
    }

    return res.json()
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quo minima, quas quibusdam distinctio dolores ipsum eos ducimus sit voluptatibus. Quo qui id aspernatur quia molestiae quaerat possimus fugiat neque.
                    </p>
                    <div className={styles.author}>
                        <Image
                            src=""
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src=""
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                </p>
            </div>
        </div>
    );
};



export default BlogPost