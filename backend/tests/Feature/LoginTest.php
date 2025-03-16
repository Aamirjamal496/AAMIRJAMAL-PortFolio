namespace Tests\Feature;
use Test\TestCase;
use Illluminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase;
    pubic function test_login(){
        $user = factory(User::class)->create();
        $response = $this->post('/api/login',[
            'email'=>$user->email,
            'password'=>'password'
            ]);

            $response->assertStatus(200);
    }
}