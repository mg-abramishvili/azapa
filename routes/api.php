<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// SHOPS
Route::get('shops', [App\Http\Controllers\ShopController::class, 'index']);
Route::post('shops', [App\Http\Controllers\ShopController::class, 'store']);
Route::get('shop/{uid}', [App\Http\Controllers\ShopController::class, 'shop']);
Route::put('shop/{uid}', [App\Http\Controllers\ShopController::class, 'update']);

// PRICELISTS
Route::get('pricelists', [App\Http\Controllers\PricelistController::class, 'index']);
Route::post('pricelists', [App\Http\Controllers\PricelistController::class, 'store']);
Route::get('pricelist/{id}', [App\Http\Controllers\PricelistController::class, 'pricelist']);
Route::put('pricelist/{id}', [App\Http\Controllers\PricelistController::class, 'update']);
Route::delete('pricelist/{id}', [App\Http\Controllers\PricelistController::class, 'delete']);

// USERS
Route::get('users', [App\Http\Controllers\UserController::class, 'index']);
Route::get('user/{uid}', [App\Http\Controllers\UserController::class, 'user']);

// ORDERS
Route::get('orders', [App\Http\Controllers\OrderController::class, 'index']);
Route::get('order/{uid}', [App\Http\Controllers\OrderController::class, 'order']);
Route::delete('order/{id}', [App\Http\Controllers\OrderController::class, 'delete']);

// FOR API
Route::get('mag/{domain}/info', [App\Http\Controllers\ApiClientController::class, 'shopInfo']);
Route::get('mag/{domain}/products', [App\Http\Controllers\ApiClientController::class, 'shopProducts']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
