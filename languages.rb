require 'pry'
languages = {
  :oo => {
    :ruby => {
      :type => "interpreted"
    },
    :javascript => {
      :type => "interpreted"
    },
    :python => {
      :type => "interpreted"
    },
    :java => {
      :type => "compiled"
    }
  },
  :functional => {
    :clojure => {
      :type => "compiled"
    },
    :erlang => {
      :type => "compiled"
    },
    :scala => {
      :type => "compiled"
    },
    :javascript => {
      :type => "interpreted"
    }

  }
}

def format_languages hash
  result = Hash.new
  hash.each do |k,v|
    v.each do |lan, type|
      if result[lan]
        result[lan][:style] << k
      else
        result[lan] = {"type": type[:type], "style": [k]}
      end
    end
  end
  puts result
end

format_languages(languages)
