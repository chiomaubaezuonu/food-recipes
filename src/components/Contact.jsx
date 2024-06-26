import {
    Button,
    Form,
    Input,
} from 'antd';


const recipeCards = [
    {
        img: "images/recipe-1.jpeg",
        name: "Carne Asada",
        prep: "15min | Cook : 5min"
    },
    {
        img: "images/recipe-2.jpeg",
        name: "Greek Ribs",
        prep: "15min | Cook : 5min"
    },
    {
        img: "images/recipe-3.jpeg",
        name: "Vegetable Soup",
        prep: "15min | Cook : 5min"
    },
]
const Contact = () => {
    return (
        <div className='contact-page'>
            <div className='contact-page-contents'>
                <div className="contact-writeup">
                    <h3 className='contact-title'>Want To Get In Touch?</h3>
                    <p>Got questions or concerns about our service, send us a message and we will get back to you soonest</p>

                    <p>Got any Recipe question or amazin Suggestion?</p>

                    <p> Want to say hi?, we'd love to hear from you. Drop us a message, and we'll reach out to you as soon as possible.</p>


                </div>
                <div className='form-div'>
                    <Form>
                        <Form.Item
                            label="Input"
                            name="Input"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Input"
                            name="Input"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="TextArea"
                            name="TextArea"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
            <div className='card-content-div'>
                <h4 className='about-subtitle'>Look At This Awesomesouce!</h4>
                <div className="card-container">
                    {
                        recipeCards.map((card) => (
                            <div className='card'>
                                <img className='card-img' src={card.img} alt='food' />
                                <h4 className='card-name'>{card.name}</h4>
                                <p className='card-text'>{card.prep}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact