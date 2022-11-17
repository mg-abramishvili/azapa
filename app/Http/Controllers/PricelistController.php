<?php

namespace App\Http\Controllers;

use App\Models\Pricelist;
use Illuminate\Http\Request;
use App\Imports\ProductImport;
use Maatwebsite\Excel\Facades\Excel;

class PricelistController extends Controller
{
    public function index()
    {
        return Pricelist::all();
    }

    public function pricelist($id)
    {
        return Pricelist::with('products')->find($id);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'file' => 'required',
        ]);

        $pricelist = new Pricelist();

        $pricelist->name = $request->name;
        $pricelist->file = $request->file;

        $pricelist->save();

        return Excel::import(new ProductImport, $request->file);

        return response('Success', 200);
    }
}
