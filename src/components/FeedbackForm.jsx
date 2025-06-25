import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


export default function FeedbackForm({onAdd}) {
    const [ name, setName ] = useState("");
    const [ comment, setComment ] = useState("");
    const [ rating, setRating ] = useState("");


    const hundleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim() || !rating.trim()) return; // return null if there is no input

        onAdd({ name, comment, rating }); // taking in props or parsing data
        // updating
        setName("");
        setComment("");
        setRating("")

        toast("Feedback submited Successfully")
    };

    return(
        <form className="space-y-4 " onSubmit={hundleSubmit}>
            <Input 
                placeholder="Student Name...." 
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <Textarea 
                placeholder="Feedback"
                value={comment}
                onChange={e => setComment(e.target.value)}
            />

            <Input
                placeholder="Rating (1-5)"
                type="number"
                value={rating}
                onChange={e => setRating(e.target.value)}
            />

            <Button type="submit">Submit Feedback</Button>
        </form>
    )
}