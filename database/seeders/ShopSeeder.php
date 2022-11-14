<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ShopSeeder extends Seeder
{
    public function run()
    {
        DB::table('shops')->insert([
            'id' => 1,
            'user_id' => 1,
            'domain' => 'toyota-zap.ru',
            'description' => 'Магазин запчастей Toyota',
            'tel' => '8 800 123-45-67',
            'address' => 'г. Москва, ул. Уличная, д. 1',
        ]);
    }
}