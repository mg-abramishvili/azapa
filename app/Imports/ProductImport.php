<?php

namespace App\Imports;

use App\Models\Product;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class ProductImport implements ToModel, WithStartRow
{
    public function model(array $row)
    {
        $request = request()->all();
        
        return new Product([
            'manufacturer' => 1,
            'artnumber' => 2,
            'name' => 1,
            'price' => 1,
            'balance' => 1,
            'category_id' => 1,
            'pricelist_id' => 1,
        ]);
    }

    public function startRow(): int
    {
        return 2;
    }
}