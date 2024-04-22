<?php

namespace Tests\Unit;

use App\Models\todo;
use App\Http\Controllers\API\todoController;
use Illuminate\Http\Request;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_store()
    {
        $data = [
            'todo' => 'Test task',
            'time' => '10:00 AM',
            'isDone' => false
        ];

        $request = new Request($data);

        $todoController = new todoController();
        $response = $todoController->store($request);

        $this->assertEquals('Successfully added', $response->getContent());
    }

    public function test_update()
    {
        $todo = todo::create([
            'todo' => 'Test task',
            'time' => '10:00 AM',
            'isDone' => false
        ]);

        $todoController = new todoController();
        $response = $todoController->update($todo->id);

        $updatedTodo = todo::find($todo->id);
        $this->assertTrue($updatedTodo->isDone);
        $this->assertEquals('Successfully updated', $response->getData()->message);
    }

    public function test_getAll()
    {
        $todo1 = todo::create([
            'todo' => 'Test task 1',
            'time' => '10:00 AM',
            'isDone' => false
        ]);

        $todo2 = todo::create([
            'todo' => 'Test task 2',
            'time' => '11:00 AM',
            'isDone' => true
        ]);

        $todoController = new todoController();
        $response = $todoController->getAll();

        $todos = $response->getData();
        $this->assertCount(2, $todos);
    }

    public function test_get()
    {
        $todo = todo::create([
            'todo' => 'Test task',
            'time' => '10:00 AM',
            'isDone' => false
        ]);

        $todoController = new todoController();
        $response = $todoController->get($todo->id);

        $todoData = $response->getData();
        $this->assertEquals('Test task', $todoData->todo);
    }

    public function test_destroy()
    {
        $todo = todo::create([
            'todo' => 'Test task',
            'time' => '10:00 AM',
            'isDone' => false
        ]);

        $todoController = new todoController();
        $response = $todoController->destroy($todo->id);

        $this->assertRedirectedToRoute($response, 'todo.index');
        $this->assertSessionHas('success');
    }
}