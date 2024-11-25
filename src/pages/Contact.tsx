import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

emailjs.init("zaCmH0j3P0f4QAp0x");

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        "service_1f8oqim",
        "template_jg4onj4",
        {
          from_name: data.name,
          user_email: data.email,
          message: data.message,
          reply_to: data.email,
        },
        "zaCmH0j3P0f4QAp0x"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60 min-h-[150px]"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-white text-primary hover:bg-primary-light hover:text-white transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;