<?php

use App\Http\Controllers\API\todoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::prefix('todos')->group(function () {
    Route::get('/',[ todoController::class, 'getAll']);
    Route::post('/',[ todoController::class, 'store']);
    Route::delete('/{id}',[ todoController::class, 'destroy']);
    Route::get('/{id}',[ todoController::class, 'get']);
    Route::put('/{id}',[ todoController::class, 'update']);
});