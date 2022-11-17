<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PricelistSeeder extends Seeder
{
    public function run()
    {
        DB::table('pricelists')->insert([
            'id' => 1,
            'name' => 'Тестовый прайс-лист',
            'file' => '/img/price-test.xlsx',
        ]);
    }
}