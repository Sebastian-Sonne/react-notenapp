import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors);

mongoose.connect('your-mongodb-connection-string')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

interface Student {
    name: string,
    id: number,
    email: string,
    writtenGrades: number[],
    oralGrades: number[],
}

const studentSchema = new mongoose.Schema<Student>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    email: { type: String, required: true },
    writtenGrades: { type: [Number], required: true },
    oralGrades: { type: [Number], required: true },
});

const StudentModel = mongoose.model<Student>('Student', studentSchema);

app.get('/api/students', async (req: Request, res: Response) => {
    const students = await StudentModel.find();
    res.send(students);
});

app.post('/api/students', async (req: Request, res: Response) => {
    const student = new StudentModel(req.body);
    await student.save();
    res.send(student);
});

app.put('/api/students/:id', async (req: Request, res: Response) => {
    const student = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
});

app.delete('/api/students/:id', async (req: Request, res: Response) => {
    await StudentModel.findByIdAndDelete(req.params.id);
    res.send({ message: 'Student deleted' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});