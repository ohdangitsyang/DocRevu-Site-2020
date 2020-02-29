import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" />
            <div className={styles.center}>
                <form 
                    action="https://formspree.io/ohdangitsyang@gmail.com"
                    method="POST"
                    className={styles.form}
                >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className={styles.formControl}
                            placeholder="john doe" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className={styles.formControl}
                            placeholder="email@email.com" 
                        />
                    </div>
                    <div>
                        <label htmlFor="mssage">Message</label>
                        <textarea 
                            type="message" 
                            name="message" 
                            rows="10"
                            id="name" 
                            className={styles.formControl}
                            placeholder="Hello there!" 
                        />
                    </div>
                    <div>
                        <input type="submit" value="submit here" className={styles.submit} />
                    </div>
                </form>
            </div>
        </section>
    )    
}

export default Contact
 