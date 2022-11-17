<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApiClientController extends Controller
{
    public function shopInfo($domain)
    {
        return Shop::query()
            ->where('domain', $domain)
            ->with('pricelist')
            ->first();
    }

    public function shopProducts($domain)
    {
        $shop = Shop::where('domain', $domain)->first();
        
        return Product::query()
            ->where('pricelist_id', $shop->pricelist_id)
            ->paginate(30);
    }
}
