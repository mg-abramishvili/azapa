<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ShopController extends Controller
{
    public function index()
    {
        return Shop::with('pricelist')->get();
    }

    public function shop($uid)
    {
        return Shop::query()
            ->where('uid', $uid)
            ->with('pricelist.products')
            ->first();
    }

    public function store(Request $request)
    {
        $shop = new Shop();

        $shop->uid = Str::random(16);
        $shop->user_id = 1;
        $shop->domain = $request->domain;
        $shop->pricelist_id = $request->pricelist;
        $shop->tel = $request->tel;
        $shop->address = $request->address;
        $shop->description = $request->description;
        $shop->main_title = $request->main_title;
        $shop->about_text = $request->about_text;
        $shop->payment_delivery_text = $request->payment_delivery_text;
        $shop->contacts_text = $request->contacts_text;

        $shop->save();

        $this->addDomainToHestiaCp($shop->domain);
    }

    public function update($uid, Request $request)
    {
        $shop = Shop::where('uid', $uid)->first();

        $shop->tel = $request->tel;
        $shop->pricelist_id = $request->pricelist;
        $shop->address = $request->address;
        $shop->description = $request->description;
        $shop->main_title = $request->main_title;
        $shop->about_text = $request->about_text;
        $shop->payment_delivery_text = $request->payment_delivery_text;
        $shop->contacts_text = $request->contacts_text;

        $shop->save();
    }

    public function addDomainToHestiaCp($shopDomain)
    {
        $hst_hostname = '185.225.34.126';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = '63VBtbjw!';
        $hst_returncode = 'yes';
        $hst_command = 'v-add-domain';

        $username = 'admin';
        $domain = $shopDomain;
        
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $domain,
        );
        
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ':' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        
        return curl_exec($curl);
    }
}
