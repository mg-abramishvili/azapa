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
        
        if(rtrim($row[3]) > 0 && rtrim($row[4]) > 0)
        {
            return new Product([
                'manufacturer' => rtrim($row[0]),
                'artnumber' => rtrim($row[1]),
                'name' => rtrim($row[2]),
                'price' => rtrim($row[3]),
                'balance' => rtrim($row[4]),
                'category_id' => 1,
                'pricelist_id' => 1,
            ]);
        }
    }

    public function startRow(): int
    {
        return 2;
    }
}