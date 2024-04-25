(function() {var type_impls = {
"bp_beefy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.signature_count\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bp_beefy/struct.SignedCommitment.html#tymethod.signature_count\" class=\"fn\">signature_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the number of collected signatures.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_signatures\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bp_beefy/struct.SignedCommitment.html#tymethod.verify_signatures\" class=\"fn\">verify_signatures</a>&lt;TAuthorityId, MsgHash, 'a&gt;(\n    &amp;'a self,\n    target_number: TBlockNumber,\n    validator_set: &amp;'a <a class=\"struct\" href=\"bp_beefy/struct.ValidatorSet.html\" title=\"struct bp_beefy::ValidatorSet\">ValidatorSet</a>&lt;TAuthorityId&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;KnownSignature&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'a TAuthorityId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'a TSignature</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;<div class=\"where\">where\n    TBlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Encode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    TAuthorityId: <a class=\"trait\" href=\"sp_application_crypto/traits/trait.RuntimeAppPublic.html\" title=\"trait sp_application_crypto::traits::RuntimeAppPublic\">RuntimeAppPublic</a>&lt;Signature = TSignature&gt; + <a class=\"trait\" href=\"bp_beefy/trait.BeefyAuthorityId.html\" title=\"trait bp_beefy::BeefyAuthorityId\">BeefyAuthorityId</a>&lt;MsgHash&gt;,\n    MsgHash: Hash,</div></h4></section></summary><div class=\"docblock\"><p>Verify all the commitment signatures against the validator set that was active\nat the block where the commitment was generated.</p>\n<p>Returns the valid validator-signature pairs if the commitment can be verified.</p>\n</div></details></div></details>",0,"bp_beefy::BeefySignedCommitmentOf"],["<section id=\"impl-StructuralPartialEq-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;</h3></section>","StructuralPartialEq","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    TSignature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-Display-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-Decode-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; Decode for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: Decode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    TSignature: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-Encode-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; Encode for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: Encode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    TSignature: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;T&gt;(&amp;self, dest: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut T</a>)<div class=\"where\">where\n    T: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; TypeInfo for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"bp_beefy/struct.Commitment.html\" title=\"struct bp_beefy::Commitment\">Commitment</a>&lt;TBlockNumber&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;TSignature&gt;&gt;: TypeInfo + 'static,\n    TBlockNumber: TypeInfo + 'static,\n    TSignature: TypeInfo + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    TSignature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","bp_beefy::BeefySignedCommitmentOf"],["<section id=\"impl-Eq-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-Eq-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    TSignature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","bp_beefy::BeefySignedCommitmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SignedCommitment%3CTBlockNumber,+TSignature%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TBlockNumber, TSignature&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;<div class=\"where\">where\n    TBlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    TSignature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bp_beefy/struct.SignedCommitment.html\" title=\"struct bp_beefy::SignedCommitment\">SignedCommitment</a>&lt;TBlockNumber, TSignature&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bp_beefy::BeefySignedCommitmentOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()