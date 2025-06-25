import { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";

export default function App(){
  const [feedbacks, setFeedbacks] = useState([])

  const addFeedback = (feedback) => {
    setFeedbacks(prev => [feedback, ...prev]);// adding data
  };// 1, 2, 3 (prev)
   // 1, 2, 3, 4

  const deleteFeedback = (index) =>{
    setFeedbacks(prev => prev.filter((_, i) => i !== index ));
  };
   // ["great", "needs improvement", "excellent"]
   // ["great", "excellent"]
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Feedback Tracker</h1>
      <FeedbackForm onAdd={addFeedback}/>
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback}/>
    </div>
  )
}
