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
            'manufacturer' => $row[0],
            'artnumber' => $row[1],
            'name' => $row[2],
            'price' => $row[3],
            'balance' => $row[4],
            'category_id' => 1,
            'pricelist_id' => 1,
        ]);
    }

    public function startRow(): int
    {
        return 2;
    }
}