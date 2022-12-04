import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        massage: "",

    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {

        e.preventDefault();
        alert(` Thank you So Much ${data.fullname} For your valuable Message or FeedBack.  `)

    };
    return (
        <>
            <div className="bg-infos top-0 position-relative">
                <div className="my-5 pt-5  ">
                    <h1 className="text-center">Contact Us</h1>
                </div>
                <div className="container-fluid  contact_div ">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto ">
                            <form method='post' onSubmit={formSubmit}>

                                <div className="mb-3">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" name="fullname" id="Name" aria-describedby="helpId"
                                        value={data.fullname}
                                        onChange={InputEvent}
                                        placeholder="Name" />
                                    {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="tel" className="form-control" name="phone" id="tel" aria-describedby="emailHelpId"
                                        value={data.phone}
                                        onChange={InputEvent}
                                        placeholder="Phone Number" />
                                    {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId"
                                        value={data.email}
                                        onChange={InputEvent}
                                        placeholder="Email" />
                                    {/* <small id="emailHelpId" className="form-text text-muted">Help text</small> */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Massage</label>
                                    <textarea className="form-control" name="massage"
                                        placeholder="I Want To Say That ..."
                                        value={data.massage}
                                        onChange={InputEvent}
                                        id="massage"
                                        rows="3"></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className=" btn-get-started">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact