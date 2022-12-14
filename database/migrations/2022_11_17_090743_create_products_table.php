<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('pricelist_id');
            $table->integer('category_id');
            $table->string('name');
            $table->string('manufacturer');
            $table->string('artnumber');
            $table->string('price')->nullable();
            $table->string('balance')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};
