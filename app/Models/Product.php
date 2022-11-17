<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'manufacturer',
        'name',
        'price',
        'balance',
        'category_id',
        'pricelist_id',
        'artnumber',
    ];

    public function pricelist()
    {
        return $this->belongsTo(Pricelist::class);
    }
}
