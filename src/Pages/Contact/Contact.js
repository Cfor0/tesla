import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["comment"] = "";
            this.setState({ input: input });

            alert("The Form has submited");
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email.";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Please enter your comment.";
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h2>Contact</h2>
                    <p>Submit a question or comment:</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label> <br />
                            <input
                                type="text"
                                name="name"
                                value={this.state.input.name}
                                onChange={this.handleChange}
                                className="form-control"
                                id="name"
                            />
                            <div className="text-danger">
                                {this.state.errors.name}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label> <br />
                            <input
                                type="text"
                                name="email"
                                value={this.state.input.email}
                                onChange={this.handleChange}
                                className="form-control"
                                id="email"
                            />
                            <div className="text-danger">
                                {this.state.errors.email}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <br />
                            <textarea
                                name="comment"
                                value={this.state.input.comment}
                                onChange={this.handleChange}
                                placeholder="Enter comment"
                                className="form-control"
                            />

                            <div className="text-danger">
                                {this.state.errors.comment}
                            </div>
                        </div>

                        <button
                            type="button"
                            value="Submit"
                            className="btn btn-success"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
