<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Models\todo;
use App\Http\Controllers\Controller;
Use Log;


class todoController extends Controller
{

    public function store(Request $request)
    {
        $todo = new todo([
          'todo' => $request->get('todo'),
          'time' => $request->get('time'),
          'isDone' => $request->get('isDone'),
        ]);
        $todo->save();
        return response()->json('Successfully added');
    
    }
    public function update($id)
    {
    $data['isDone'] = true;
      todo::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
    public function getAll(){
      $data = todo::get();
      return response()->json($data, 200);
    }
    public function get($id){
      $data = todo::find($id);
      return response()->json($data, 200);
    }

    public function destroy($id)
  {
    $post = todo::find($id);
    $post->delete();
    return redirect()->route('todo.index')
      ->with('success', 'todo deleted successfully');
  }
  
  }