namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'password' =>  'required' , 
                'name' => 'required|string|max:100', 
                'email' => 'required|string|max:100|email',
                'phone' => 'string',  
                'birthdate' => 'string' ,
                'drzava' => '' ,
            ]
        );
        if ($validator->fails()) 
        return response()->json($validator->errors()); 
        $user = User::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'phone' => $request->phone,
            'birthdate' =>$request->birthdate,
            'drzava' =>$request->drzava,

            'password' => Hash::make($request->password)]);



        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['data' => $user, 'acess_token' => $token, 'token_type' => 'Bearer']);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success'=>false]);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['poruka' => 'Pogresan email ili password!']);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        if(!$user){
            return response()->json([
                'status'=>401,
                'message'=>'Invalid credentials',
            ]);
        }else{
            if($user->admin==1){
                $role='admin';
                $token = $user->createToken($user->email.'_AdminToken',['server:admin'])->plainTextToken;
            }else{
                $role=' ';
                $token = $user->createToken($user->email.'_Token',[''])->plainTextToken;
            }
        }

       // $token = $user->createToken('LoginToken')->plainTextToken;

        $response = [
            'status'=>200,
            'username'=>$user->name,
            'token' => $token,
            'role'=> $role,
            'id'=>$user->id
        ];

        return response()->json([$response,'success'=>true ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json(['Uspešno ste se izlogovali!']);
    }
}