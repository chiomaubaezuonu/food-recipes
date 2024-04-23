import {
    Button,
    Form,
    Input,
} from 'antd';

const Contact = () => {
    return (
        <div>
            <div className='contact-form'>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, assumenda.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nulla modi dolorem tenetur qui aliquid vero recusandae temporibus animi eaque quam in id, ipsa odio sit beatae dolores! Sed provident vitae fugiat eos ex delectus culpa, voluptatum, vel iste expedita libero, neque possimus ipsum enim qui. Corporis eveniet nihil omnis quam assumenda nulla blanditiis provident ullam exercitationem. Ipsa, ut porro.</p>
                <div>



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
                    );
                    export default App;
                </div>
            </div>
        </div>
    )
}

export default Contact