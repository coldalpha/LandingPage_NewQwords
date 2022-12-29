<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('vHome', [
            'section'                 => 'HOME ',
        ]);
    }
    public function jadwal()
    {
        return view('vJadwal', [
            'section'                 => 'JADWAL ',
        ]);
    }
    public function pup()
    {
        return view('vPup', [
            'section'                 => 'PUP ',
        ]);
    }
    public function hivaids()
    {
        return view('vHivAids', [
            'section'                 => 'HIV & AIDS ',
        ]);
    }
    public function lifeskill()
    {
        return view('vLifeSkill', [
            'section'                 => 'LIFE SKILL ',
        ]);
    }
    public function pernikahandini()
    {
        return view('vPernikahanDini', [
            'section'                 => 'PERNIKAHAN DINI',
        ]);
    }
    public function sekspranikah()
    {
        return view('vSeksPranikah', [
            'section'                 => 'SEKS PRANIKAH ',
        ]);
    }
    public function NAPZA()
    {
        return view('vNapza', [
            'section'                 => 'NAPZA',
        ]);
    }
    public function tentangkita()
    {
        return view('vTentangKita', [
            'section'                 => 'TENTANG KITA',
        ]);
    }
    public function stunting()
    {
        return view('vStunting', [
            'section'                 => 'STUNTING',
        ]);
    }
    public function konseling()
    {
        return view('vKonseling', [
            'section'                 => 'KONSELING ',
        ]);
    }
    public function setelan()
    {
        return view('vSetelan', [
            'section'                 => 'SETELAN ',
        ]);
    }
    public function update(Request $request, $email)
    {
        $email = $request->email;
        $user = User::where('email', '=', $email)->get();
        $validatedData = $request->validate([
            'name'              => 'required|min:5|max:255',
            'asal_sekolah'      => 'required',
            'no_hp'             => 'required'
        ]);
        $validatedData['updated_at']    = now();
        if ($user) {
            user::where('id', $user[0]->id)->update($validatedData);
            return redirect('setelan')->with('suksesUpdate', 'Update user Berhasil');
        }
        return redirect('setelan')->with('gagalUpdate', 'Update user Gagal');
    }
}
