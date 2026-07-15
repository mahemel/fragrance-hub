import SectionHeader from "@/ui/SectionHeader";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import React from "react";

const Newsletter = () => {
    return (
        <section className="section-padding px-4 bg-secondary">
            <div className="max-w-2xl mx-auto text-center">
                <SectionHeader
                    label="Newsletter"
                    title="Stay Smelling Great"
                    subtitle="Receive fragrance recommendations, seasonal picks, and
                    community highlights directly in your inbox."
                />

                <div className="flex max-w-md mx-auto">
                    <Form className="w-full">
                        <TextField isRequired name="email" type="email">
                            <Label className="text-base sr-only">Email</Label>
                            <Input
                                placeholder="you@example.com"
                                className="w-full px-4 py-0 h-12 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/35 text-base shadow-none rounded-none"
                            />
                            <FieldError />
                        </TextField>
                    </Form>

                    <button className="btn-accent cursor-pointer">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
