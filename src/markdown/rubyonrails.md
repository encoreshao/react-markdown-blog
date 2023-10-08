# Useful Ruby On Rails Code Snippets

### Generate secret code in Ruby on Rails

<Code language="javascript">
[0] pry(main)> bundle exec rake app:secret
=> 0f3a7ebe0e46fd96ce83667fa0b203ac9caeee......
</Code>

### Generate random code in Ruby on Rails

<Code language="javascript">
[1] pry(main)> SecureRandom.hex(15)
=> "738cab2aff78b40fd32bbd5e9bae9d"

[2] pry(main)> SecureRandom.uuid
=> "6de4730e-ea57-4717-af3c-6b7f543443b1"
</Code>

### use rails to generate migration files

<Code language="javascript">
[3] pry(main)> rails g model User name:string email:string 

[4] pry(main)> rails g migration addAvatarToUsers avatar:string
</Code>


