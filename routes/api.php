<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// SHOPS
Route::get('shops', [App\Http\Controllers\ShopController::class, 'index']);
Route::post('shops', [App\Http\Controllers\ShopController::class, 'store']);
Route::get('shop/{uid}', [App\Http\Controllers\ShopController::class, 'shop']);
Route::put('shop/{uid}', [App\Http\Controllers\ShopController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
