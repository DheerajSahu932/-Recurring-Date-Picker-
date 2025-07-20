import DatePicker from "./components/datePicker";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Recurring Date Picker</h1>
      <DatePicker />
    </main>
  );
};

export default Home;