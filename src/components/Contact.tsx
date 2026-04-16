"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0a2f2f]/20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Get In <span className="text-accent">Touch</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-accent rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
                    >
                        Whether you have a specific project in mind or need expert consultancy, our team is ready to deliver engineering excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Details & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-card p-8 rounded-2xl border border-black/5 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground border-b border-black/10 pb-4">Contact Information</h3>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-accent shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Head Office Location</h4>
                                    <p className="text-muted-foreground">Jigjiga, Somali Region, Ethiopia</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-accent shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Phone</h4>
                                    <p className="text-muted-foreground flex flex-col gap-1">
                                        <a href="tel:+251911272815" className="hover:text-accent transition-colors">+251-911-272815</a>
                                        <a href="tel:+251712448742" className="hover:text-accent transition-colors">+251-712-448742</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-accent shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
                                    <p className="text-muted-foreground">
                                        <a href="mailto:mooneconsultancy@gmail.com" className="hover:text-accent transition-colors break-all">
                                            mooneconsultancy@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map iframe placeholder */}
                        <div className="h-64 rounded-2xl overflow-hidden border border-black/5 bg-muted/20 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126131.78917804975!2d42.71536761596707!3d9.351296434440316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1630c72c1c9af2cd%3A0xc6cb517ddbb15b6d!2sJijiga%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-2xl" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 md:p-10 rounded-2xl border border-accent/20 shadow-2xl relative overflow-hidden"
                    >
                        {/* Form accent glow */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

                        <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-background border border-black/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-background border border-black/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full bg-background border border-black/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="+251..." />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-muted-foreground">Service Interested In</label>
                                    <select id="service" className="w-full bg-background border border-black/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none">
                                        <option value="">Select a service</option>
                                        <option value="civil">Civil & Structural</option>
                                        <option value="mep">Mechanical & Electrical</option>
                                        <option value="consulting">General Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Your Message</label>
                                <textarea id="message" rows={4} className="w-full bg-background border border-black/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button className="w-full bg-accent text-primary-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-hover transition-all hover:scale-[1.02] shadow-lg">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
