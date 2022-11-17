<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->integer('user_id');
            $table->integer('pricelist_id');
            $table->string('domain');
            $table->string('description');
            $table->string('tel');
            $table->string('address');
            $table->longText('about_text')->default('<p>Текст о магазине.</p>');
            $table->longText('payment_delivery_text')->default('<p>Текст об оплате и доставке.</p>');
            $table->longText('contacts_text')->default('<p>Текст с контактами.</p>');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('shops');
    }
};
