(function() {var implementors = {
"bridge_hub_rococo_runtime":[["impl FromPolkadotBulletinInboundLaneApiV1&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/generic/unchecked_extrinsic/struct.UncheckedExtrinsic.html\" title=\"struct sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;<a class=\"enum\" href=\"bridge_hub_rococo_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_rococo_runtime::MultiAddress\">MultiAddress</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"bridge_hub_rococo_runtime/enum.RuntimeCall.html\" title=\"enum bridge_hub_rococo_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a>, (<a class=\"struct\" href=\"frame_system/extensions/check_non_zero_sender/struct.CheckNonZeroSender.html\" title=\"struct frame_system::extensions::check_non_zero_sender::CheckNonZeroSender\">CheckNonZeroSender</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_spec_version/struct.CheckSpecVersion.html\" title=\"struct frame_system::extensions::check_spec_version::CheckSpecVersion\">CheckSpecVersion</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_tx_version/struct.CheckTxVersion.html\" title=\"struct frame_system::extensions::check_tx_version::CheckTxVersion\">CheckTxVersion</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_genesis/struct.CheckGenesis.html\" title=\"struct frame_system::extensions::check_genesis::CheckGenesis\">CheckGenesis</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_mortality/struct.CheckMortality.html\" title=\"struct frame_system::extensions::check_mortality::CheckMortality\">CheckMortality</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_nonce/struct.CheckNonce.html\" title=\"struct frame_system::extensions::check_nonce::CheckNonce\">CheckNonce</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_weight/struct.CheckWeight.html\" title=\"struct frame_system::extensions::check_weight::CheckWeight\">CheckWeight</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"pallet_transaction_payment/struct.ChargeTransactionPayment.html\" title=\"struct pallet_transaction_payment::ChargeTransactionPayment\">ChargeTransactionPayment</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_rococo_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>, (<a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.RefundSignedExtensionAdapter.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::RefundSignedExtensionAdapter\">RefundSignedExtensionAdapter</a>&lt;<a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.RefundBridgedMessages.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::RefundBridgedMessages\">RefundBridgedMessages</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>, <a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.RefundableMessagesLane.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::RefundableMessagesLane\">RefundableMessagesLane</a>&lt;Instance3, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_to_westend_config/struct.AssetHubRococoToAssetHubWestendMessagesLane.html\" title=\"struct bridge_hub_rococo_runtime::bridge_to_westend_config::AssetHubRococoToAssetHubWestendMessagesLane\">AssetHubRococoToAssetHubWestendMessagesLane</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.ActualFeeRefund.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::ActualFeeRefund\">ActualFeeRefund</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_to_westend_config/struct.PriorityBoostPerMessage.html\" title=\"struct bridge_hub_rococo_runtime::bridge_to_westend_config::PriorityBoostPerMessage\">PriorityBoostPerMessage</a>, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_to_westend_config/struct.StrOnBridgeHubRococoRefundBridgeHubWestendMessages.html\" title=\"struct bridge_hub_rococo_runtime::bridge_to_westend_config::StrOnBridgeHubRococoRefundBridgeHubWestendMessages\">StrOnBridgeHubRococoRefundBridgeHubWestendMessages</a>&gt;&gt;, <a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.RefundSignedExtensionAdapter.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::RefundSignedExtensionAdapter\">RefundSignedExtensionAdapter</a>&lt;<a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.RefundBridgedMessages.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::RefundBridgedMessages\">RefundBridgedMessages</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>, <a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.RefundableMessagesLane.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::RefundableMessagesLane\">RefundableMessagesLane</a>&lt;Instance4, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_to_bulletin_config/struct.RococoPeopleToRococoBulletinMessagesLane.html\" title=\"struct bridge_hub_rococo_runtime::bridge_to_bulletin_config::RococoPeopleToRococoBulletinMessagesLane\">RococoPeopleToRococoBulletinMessagesLane</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/extensions/refund_relayer_extension/struct.ActualFeeRefund.html\" title=\"struct bridge_runtime_common::extensions::refund_relayer_extension::ActualFeeRefund\">ActualFeeRefund</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_to_bulletin_config/struct.PriorityBoostPerMessage.html\" title=\"struct bridge_hub_rococo_runtime::bridge_to_bulletin_config::PriorityBoostPerMessage\">PriorityBoostPerMessage</a>, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_to_bulletin_config/struct.StrOnBridgeHubRococoRefundRococoBulletinMessages.html\" title=\"struct bridge_hub_rococo_runtime::bridge_to_bulletin_config::StrOnBridgeHubRococoRefundRococoBulletinMessages\">StrOnBridgeHubRococoRefundRococoBulletinMessages</a>&gt;&gt;), <a class=\"struct\" href=\"cumulus_primitives_storage_weight_reclaim/struct.StorageWeightReclaim.html\" title=\"struct cumulus_primitives_storage_weight_reclaim::StorageWeightReclaim\">StorageWeightReclaim</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;)&gt;&gt;&gt; for <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()