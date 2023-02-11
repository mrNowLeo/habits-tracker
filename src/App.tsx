import { HabitsList } from './components/habits-list';
import { Header } from './components/header';

export const App = () => {
    return (
        <div className="App">
            <Header />
            <HabitsList />
        </div>
    );
};
