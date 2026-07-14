"use client";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (name && email && message) {
            toast.success(
                "Thank you! We will reply to your message as soon as possible.",
            );
        }
    };
    return (
        <Form className="flex flex-col gap-4 -mt-5" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label className="text-base">Name</Label>
                    <Input
                        placeholder="Enter your full name"
                        className="text-field"
                    />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-base">Email</Label>
                    <Input
                        placeholder="you@example.com"
                        className="text-field"
                    />
                    <FieldError />
                </TextField>
            </div>

            <TextField name="subject">
                <Label className="text-base">Subject</Label>
                <Input placeholder="Enter subject" className="text-field" />
                <FieldError />
            </TextField>

            <TextField isRequired name="message">
                <Label>Message</Label>
                <TextArea
                    placeholder="Message..."
                    className="w-full px-4  border border-black/12 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/35 text-base shadow-none rounded-none"
                />
                <FieldError />
            </TextField>
            <div>
                <Button
                    type="submit"
                    className="btn-accent rounded-none w-full"
                >
                    Send Message
                </Button>
            </div>
        </Form>
    );
};

export default ContactForm;
