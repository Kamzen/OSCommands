<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CommandController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('test')->group(function (){
    Route::prefix('commands')->group(function (){
        Route::get('/', 'CommandController@getAllCommands');
        Route::post('/', "CommandController@createCommand");
        Route::put('/{command_id}', 'CommandController@updateCommand');
        Route::delete('/{command_id}', 'CommandController@deleteCommand');
    });
});
