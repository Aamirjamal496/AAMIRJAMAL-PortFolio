<?php
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillsController;
use illuminate\Http\Request;
use illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/users',[UserController::class,"index"]);
Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::post('logout',[UserController::class, 'logout']);

// Home Routes
Route::post('/contact',[MessageController::class,'contact']);

// Admin Routes
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/projects',[ProjectController::class,'store']);
    Route::post('/skills',[SkillsController::class, 'store']);
    Route::get('/messages',[MessageController::class,'getMessages']);
    Route::delete('/delete/{id}',[MessageController::class,'destroy']);
});