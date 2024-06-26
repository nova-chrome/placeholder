import { CreateTodoCard } from './create-todo-card';
import { TodosDataTable } from './todos-data-table';

export const TodosFeature = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto mt-5 lg:flex-row">
      <div className="order-1 w-full lg:w-1/3 lg:order-2">
        <CreateTodoCard />
      </div>
      <div className="order-2 w-full lg:w-2/3 lg:order-1">
        <TodosDataTable />
      </div>
    </div>
  );
};
